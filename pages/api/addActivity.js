// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import {posts} from '../../data/data'

export default function activityHandler(req, res)
{
  if (req.method === 'POST')
  { 
    // Process a POST request
    const body = req.body;
    console.log(body);
    posts.push(body);
    res.status(200).json(body);
  } else
  {
    res.status(406).send('Sorry, we cannot find that request method!');
    // Handle any other HTTP method
  }
}

