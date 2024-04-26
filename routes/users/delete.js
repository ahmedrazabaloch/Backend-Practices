import User from "../../models/user/index.js"

const deleteUser = async (req, res) => {

    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id)
        res.status(200).send({ status: 200, message: "User deleted" })
    } catch (err) {
        res.status(500).send({
            status: 500
        })
    }


};

export default deleteUser;