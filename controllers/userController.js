module.exports.getData = async function getData(req,res) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        res.status(200).json({
            success:true,
            message:"data recieved successfully",
            data:data
        })
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}



// module.exports.getPosts = async function getPosts(req,res) {
//     try {
//         const {id} = req.params;
//         console.log(id);
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            

//         const data = await response.json();
//         // console.log(data);
//         const filteredData = data.filter(item => item.userId === id);

//         console.log(filteredData);

//         res.status(200).json({
//             success:true,
//             message:"data recieved successfully",
//             data:filteredData
//         })
//     } catch (error) {
//         return {
//             success: false,
//             message: error.message
//         };
//     }
// }





module.exports.getPosts = async function getPosts(req, res) {
    try {
        const { id } = req.params;
        console.log(id);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const data = await response.json();
        const filteredData = data.filter(item => item.userId == id);

        console.log(filteredData);

        res.status(200).json({
            success: true,
            message: "Data received successfully",
            data: filteredData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
