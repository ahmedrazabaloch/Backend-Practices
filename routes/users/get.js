import User from "../../models/user/index.js"

const getUsers = async (req, res) => {

    try {

        // const users = await User.find({
        //     username: "ahmedraza"
        //     email: "ahmedraza@gmail.com"
        // });

        // const users = await User.findOne({
        //     email: "ahmedraza@gmail.com"
        // });

        // const users = await User.findById("662acea270c5897c6f0c2e38")

        const users = await User.find()

        res.status(200).send({
            users
        })

    } catch (err) {
        res.status(500).send({ status: 500, err })

    }


};

export default getUsers;