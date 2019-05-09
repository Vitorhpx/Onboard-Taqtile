export class Validator{
    static isEmail(text:string): boolean{
        const regex = /\w+@\w+.com$/gm;
        return regex.test(text);
    }
    static isPassword(text:string): boolean{
        const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/gm;
        return regex.test(text);
    }
    static isId(text:string): boolean{
        const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/gm;
        return regex.test(text);
    }
    static isName(text:string): boolean{
        const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/gm;
        return regex.test(text);
    }
    static isCpf(text:string): boolean{
      const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/gm;
      return regex.test(text);
    }
    static isBirthDate(text:string): boolean{
      const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/gm;
      return regex.test(text);
    }
    static isRole(text:string): boolean{
      const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/gm;
      return regex.test(text);
    }
}
