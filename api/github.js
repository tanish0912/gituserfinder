export default async function handler(req, res) {
    const { username } = req.query; 
    const token = process.env.GITHUB_API_KEY; 

    try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `token ${token}`,
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: `Error: ${response.status}` });
        }

        const data = await response.json();
        return res.status(200).json(data); 
    } catch (error) {
        return res.status(500).json({ error: error.message }); 
    }
}
