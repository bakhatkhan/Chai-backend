import express from 'express'

const app = express()

// Give me list of five jokes
app.get('/api/jokes',(req, res)=>{
    const jokes = [
        {
            id: 1,
            title : "JOKE 1",
            content: "Why did the chicken cross the road? To get to the other side."
        },
        {
            id: 2,
            title : "JOKE 2",
            content: "Why did the tomato turn red? Because it saw the salad dressing."
        },
        {
            id: 3,
            title : "JOKE 3",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
            id: 4,
            title : "JOKE 4",
            content: "Why did the cow go to school? To get a better grip on her bull."
        },
        {
            id: 5,
            title : "JOKE 5",
            content: "Why did the policeman get lost? He couldn't find his car."
        },
        {
            id: 6,
            title : "JOKE 6",
            content: "Why did the puppy cross the road? To get to the other side."
        },
        {
            id: 7,
            title : "JOKE 7",
            content: "Why did the scarecrow play hide and seek? He wanted to see who could find the car."
        }
    ]

    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})