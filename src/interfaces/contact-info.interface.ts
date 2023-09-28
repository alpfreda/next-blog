interface ContactInfoItem {
  title: string
  link: string
}

export interface ContactInfo {
  id?: string
  email: ContactInfoItem
  linkedin: ContactInfoItem
  github: ContactInfoItem
}
