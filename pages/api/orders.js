const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body);
    }
    
    res.json({ hello: 'world' });
}

export default handler;