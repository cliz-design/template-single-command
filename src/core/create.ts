export interface CreateOptions {
  codePath?: string;
}

export async function create(options?: CreateOptions) {
  console.log('create with options:', options);
}
