import { put, del, list } from "@vercel/blob"

export async function uploadFile(file: File, folder?: string) {
  try {
    const filename = folder ? `${folder}/${file.name}` : file.name

    const blob = await put(filename, file, {
      access: "public",
    })

    return blob
  } catch (error) {
    console.error("Upload failed:", error)
    throw new Error("Failed to upload file")
  }
}

export async function deleteFile(url: string) {
  try {
    await del(url)
    return true
  } catch (error) {
    console.error("Delete failed:", error)
    throw new Error("Failed to delete file")
  }
}

export async function listFiles(prefix?: string) {
  try {
    const { blobs } = await list({
      prefix,
    })
    return blobs
  } catch (error) {
    console.error("List failed:", error)
    throw new Error("Failed to list files")
  }
}
