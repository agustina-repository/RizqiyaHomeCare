import React, { useCallback, useState } from "react"
import { Stack, Card, Text, Spinner } from "@sanity/ui"
import { UploadIcon } from "@sanity/icons"
import { useClient, PatchEvent, set, insert } from "sanity"
import type { ArrayOfObjectsInputProps } from "sanity"

export function CustomGalleryInput(
  props: ArrayOfObjectsInputProps
) {
  const { renderDefault, value = [], onChange } = props
  const client = useClient({ apiVersion: "2023-01-01" })

  const [loading, setLoading] = useState(false)

  const handleFiles = useCallback(
    async (files: FileList | null) => {
      if (!files) return

      setLoading(true)

      try {
        const uploads = Array.from(files).map(async (file) => {
          const asset = await client.assets.upload("image", file)

          return {
            _type: "image",
            _key: crypto.randomUUID(),
            asset: {
              _type: "reference",
              _ref: asset._id,
            },
          }
        })

        const images = await Promise.all(uploads)

        onChange(
          PatchEvent.from(
            value.length === 0
              ? set(images)
              : insert(images, "after", [-1])
          )
        )
      } finally {
        setLoading(false)
      }
    },
    [client, onChange, value]
  )

  return (
    <Stack space={3}>
      <Card
        padding={4}
        radius={2}
        shadow={1}
        tone={loading ? "primary" : "transparent"}
        style={{
          border: "2px dashed #ccc",
          textAlign: "center",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1,
        }}
        onDrop={(e) => {
          if (loading) return
          e.preventDefault()
          handleFiles(e.dataTransfer.files)
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        {loading ? (
          <>
            <Spinner />
            <Text size={2} style={{ marginTop: 8 }}>
              Uploading images...
            </Text>
          </>
        ) : (
          <>
            <UploadIcon style={{ fontSize: 30 }} />
            <Text size={2} style={{ marginTop: 8 }}>
              Drag or paste image here
            </Text>
          </>
        )}
      </Card>

      {renderDefault(props)}
    </Stack>
  )
}
