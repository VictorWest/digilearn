export function toYouTubeEmbed(url: string | null) {
  if (!url) return
  
  const videoIdMatch = url.match(/v=([^&]+)/)
  const timeMatch = url.match(/t=(\d+)s?/)

  if (!videoIdMatch) return ""

  const videoId = videoIdMatch[1]
  const start = timeMatch ? `?start=${timeMatch[1]}` : ""

  return `https://www.youtube.com/embed/${videoId}${start}`
}