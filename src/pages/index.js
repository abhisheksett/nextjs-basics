import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
  </div> 
)

/**
 * This function is used in server side. This doesn't get bundled. This is generally
 * used to prefetch data. Server fetches the data, saves in JSON file and passes to
 * component as props. This function runs only once at build time
 */

export async function getStaticProps() {
  // data from CMS can be fetched here
  return {
    props: {
      content: {
        title: 'Wow, nice note app'
      }
    }
  }
}


// import React from 'react';
// import Link from 'next/link';

// const Page = () => {
//     const id = 123;

//     return (
//         <div>
//             <h1>Index Page</h1>
//             <Link href="/notes">
//                 <a>Go to notes</a>
//             </Link>
//             <br />
//             <Link href="/notes/[id].js" as={`/notes/${id}`}>
//                 <a>Go to a note id</a>
//             </Link>
//         </div>
//     )
// };

// export default Page;