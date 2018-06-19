const express= require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers= [
        {id: 1, firstName: 'John', lastName: 'Doe'}
    ];

    res.json(customers);
});

const port = 8080;

app.listen(port, () => console.log(`Server starting on ${port}`));
