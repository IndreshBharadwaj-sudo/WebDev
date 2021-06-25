const bcrypt = require('bcrypt');

const hashpw = async (pw) =>
{
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedpw) =>
{
    const result = await bcrypt.compare(pw, hashedpw);
    if (result)
    {
        console.log('Logged In!');
    }
    else
    {
        console.log('Login FAILED');
    }
}

// hashpw('monkey');
login('monkey', '$2b$12$RgtWBNmnMoZE51AulHI9B.YzvTn8kLs5xsJPAEaVG.UhOwbnZg9/i');