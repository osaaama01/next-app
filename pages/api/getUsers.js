// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res)
{
  res.status(200).json([{ name: 'User',age: 20, password: 1234 },{ name: 'Osama',age: 25, password: 1234 }]);
}
