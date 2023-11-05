export default function IconLink({ href, src, alt, imgClassName, linkClassName }) {
  return (
    <a href={href} target="_blank" className={linkClassName}>
      <img src={src} alt={alt} className={imgClassName} />
    </a>
  )
}