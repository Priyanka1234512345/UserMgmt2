// contactController.js
// Import contact model
const User = require('./userModel');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "users retrieved successfully",
            data: users
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    console.log(req.body)
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.gender = req.body.gender;
    user.email = req.body.email;
    user.phone = req.body.phone;
// save the contact and check for errors
    user.save(function (err) {
        if (err) res.json(err);
        else{
            res.json({
            message: 'New user created!',
            data: user
        });
        }
    });
};

exports.updates=function(req,res){
    console.log(req.body)
    User.findOne(
     {_id:req.body._id},
     
   (err,data)=>{
        if(err) return res.json({"err":err});
             else 
             {
                
        data.name =req.body.name;
        data.gender=req.body.gender
        data.email=req.body.email,
         data.phone=req.body.phone
   data.save(function (err) {
        if (err) res.json(err);
        else{
            res.json({
            message: ' user updated!',
            data: data
        });
        }
    });
             }
    });
 };



// Handle view contact info
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};
 exports.update = function (req, res) {
     let name=req.body.name;
     console.log(req.body.phone);
 User.update(
     {name:name},
     {
        name:req.body.name,
        gender:req.body.gender,
        email:req.body.email,
         phone:req.body.phone
   },
   (err,data)=>{
        if(err) return res.json({"err":err});
             else return res.json({"res":data});
    });
 };

//  Product.findByIdAndUpdate(req.params.contactId, {
//         name: req.body.name || "No product title", 
//         gender: req.body.gender,
//         email: req.body.email,
//         phone: req.body.phone
//     }, {new: true})
//     .then(contact => {
//         if(!contactt) {
//             return res.status(404).send({
//                 message: "Product not found with id " + req.params.contactId
//             });
//         }
//         res.send(contact);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Product not found with id " + req.params.productId
//             });                
//         }
//         return res.status(500).send({
//             message: "Something wrong updating note with id " + req.params.productId
//         });
//     });
// };
// Handle delete contact
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};
 