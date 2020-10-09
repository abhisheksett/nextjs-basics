import React from 'react';
import { useRouter } from 'next/router';

const Params = () => {

    const router = useRouter();
    // /notes/1/2/3
    const { params } = router.query;
    // Here params will contain array of [1,2,3]. This filename is catch all params
    console.log(params);

    return <div>NotesId Page id - {params}</div>
};

export default Params;