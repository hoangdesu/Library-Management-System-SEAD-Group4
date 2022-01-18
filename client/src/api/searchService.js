import React from 'react';
import axios from 'axios';

export const searchBook=(searchRequest)=>{
    return axios({
        'method':'GET',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/book/search`,
        'data':searchRequest
    })
}