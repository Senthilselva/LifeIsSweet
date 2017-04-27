  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'User name did not exist' });
    } else {
      console.log(newUser);
      
      newUser.save(function(err, data) {
        if (err) {
          console.log(err.errors)
          res.json({ err: err.errors.message });
        } else {
          console.log(data)
          console.log('User saved successfully');
          //if the user is a child
            if(data.child){
              let newChild = new Child({});
              newChild.name = req.body.name;
              newChild.morningbolus = parseInt(req.body.morningbolus);
              newChild.afternoonbolus = parseInt(req.body.afternoonbolus);
              newChild.dinnerbolus = parseInt(req.body.dinnerbolus);

              newChild.save(function(err,childData){
                if (err){
                  console.log(err.errors)
                  res.json({ err: err.errors.message });
                }
                else{
                  res.json({ success : true });
                }
              }); 
            } else {
              //if the user is a caretaker
              let newCareTaker = new CareTaker({});
              newCareTaker.name = req.body.name;
              newCareTaker.phone = req.body.name;

              newCareTaker.save(function(err,careTaker){
                if(err){
                  console.log(err.errors)
                  res.json({ err: err.errors.message });
                }
                else{
                  res.json({ success:true });
                }
              }); //newCareTaker
            }
        }
      }); //newUser
    }
  });