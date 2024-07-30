import * as z from 'zod';

const schema = z
  .object({
    first_name: z.string().nonempty({ message: 'Imię jest wymagane' }),
    last_name: z.string().optional(),
    continent: z.string().optional(),
    date_of_birth: z.date().optional(),
  })
  .refine(
    (data) =>
      !(
        data.continent === 'Europa' &&
        data.last_name &&
        data.last_name.length < 2
      ),
    {
      message: 'Nie spełnione kryteria',
      path: ['continent'],
    }
  );

export default schema;
