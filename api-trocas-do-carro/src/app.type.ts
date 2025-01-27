export namespace TResponse {
  export type Put = {
    mensagem: string;
    dados: object | object[];
    statusCode: number;
  }

  export type Post = {
    mensagem: string;
    dados: object | object[];
    statusCode: number;
  }
}
