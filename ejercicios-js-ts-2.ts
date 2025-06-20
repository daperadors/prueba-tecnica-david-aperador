interface IResponse<T> {
  data: T;
}

const res1: IResponse<boolean> = { data: true };
const res2: IResponse<number> = { data: 1 };

res1.data = 'a'; //Fallará, ya que espera un tipo boolean.
res2.data = true; //Fallará, ya que espera un tipo number.

res1.data = false; //Funcionará
res2.data = 0; //Funcionará
