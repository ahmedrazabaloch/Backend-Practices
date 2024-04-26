import User from "../../models/user/index.js"

const postUser = async (req, res) => {
    // const user = new User(req.body)
    // user.save()
    try {
        const user = await User.create(req.body);
        const data = user.toObject();
        delete data.password;
        res.status(201).send({ status: 201, user: data })
    } catch (err) {
        res.status(500).send({ status: 500, err })
    }
}

export default postUser