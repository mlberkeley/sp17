Template.s3_tester.events({
    "click button.upload": function(){
        var files = $("input.file_bag")[0].files

        S3.upload({
                files:files,
                // make a specific subfolder for student ids
                path:"subfolder"
            },function(e,r){
                console.log(r);
        });
    }
})

Template.s3_tester.helpers({
    "files": function(){
        return S3.collection.find();
    }
})
