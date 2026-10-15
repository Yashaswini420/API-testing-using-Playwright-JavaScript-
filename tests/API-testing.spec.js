import { test, expect } from '@playwright/test';
import { request } from 'http';

test('APITest for GET', async ({ request }) => {

    const res = await request.get("https://reqres.in/api/users?page=2");

    expect(res.status()).toBe(200);


    //verify the word contain

    const text = await res.text();
    expect(text).toContain('michael.lawson@reqres.in');

    //To get the response in console
    console.log(await res.json());

})

test('APITest for Post', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {

            "name": "Aaru",
            "job": "leader"
        }

    })

    expect(response.status()).toBe(201);
    const text=await response.text();
    expect(text).toContain('Aaru');
    console.log(await response.json())
})


test('APITest for PUT', async({request})=>{
    const response = await request.put('https://reqres.in/api/users/2',{data: {

            "name": "Aaru",
            "job": "leader"
        }

    })

    expect(response.status()).toBe(200);
    const text=await response.text();
    expect(text).toContain('Aaru');
    console.log(await response.json());
})

test('APITest for Delete' , async({request})=>{

    const response=await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
})