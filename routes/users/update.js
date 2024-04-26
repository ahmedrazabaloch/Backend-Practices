import User from "../../models/user/index.js"

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        res.status(200).send({ status: 200, message: "User updated successfully" })
    } catch (err) {
        res.status(500).send({ status: 500, err })

    }
}

export default updateUser;