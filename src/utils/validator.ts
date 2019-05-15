export class Validator {
  static isEmail(text: string): boolean {
    const regex = /\w+@\w+.com$/gm
    return regex.test(text)
  }
  static isPassword(text: string): boolean {
    const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/gm
    return regex.test(text)
  }
  static isId(text: string): boolean {
    const regex = /^[0-9]+$/gm
    return regex.test(text)
  }
  static isName(text: string): boolean {
    const regex = /^[A-Z][a-z]+[\s,][A-Z][a-z]+$/gm
    return regex.test(text)
  }
  static isCpf(text: string): boolean {
    const regex = /^[0-9]{11}$/gm
    return regex.test(text)
  }
  static isBirthDate(text: string): boolean {
    const regex = /^[0-2][0-9]{3}[-](0[1-9]|1[0-2])[-](0[1-9]|[1-2][0-9])$/gm
    return regex.test(text)
  }
  static isRole(text: string): boolean {
    const regex = /^(user|admin)$/gm
    return regex.test(text)
  }
}
