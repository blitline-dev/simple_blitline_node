Blitline_Node
========
This is a thin wrapper around the blitline web service. Blitline provides a simple web based image processing service.

You must first have a Blitline.com account to successfully use the gem. You can obtain one (free and without obligation, not even an email address) by going to http://www.blitline.com

Once you have your account, you will need to find you ACCOUNT_ID which you can get by logging in and clicking on the *Account* tab.


For your node project, simply npm install it

    $ npm install blitline

Once installed, you can try the following code in your NodeJS app:

```javascript

    var Blitline = require('./lib/blitline');

    var blitline = new Blitline();
    /* Replace MY_APP_ID with your Blitline application_id */
    var job = blitline.addJob("MY_APP_ID", "http://www.google.com/intl/en_com/images/srpr/logo3w.png");
    /* Add a blur function to the image */
    var blur_function = job.addFunction("blur", null, "my_blurred_image");
    /* Once blurred, add a sepia filter to the image */
    var sepia_function = blur_function.addFunction("sepia_tone", null, "my_blurred_sepia_toned_image");
    /* Once blurred, crop to 50x50 */
    var crop_function = sepia_function.addFunction("resize_to_fill", { width: 50, height: 50}, "my_sepia_tone_blurred_cropped_image");

    blitline.postJobs(function(response) {
      console.log(response);
    });

```

And you will get JSON back describing where the resulting image will be located
There are many more things you can do with images (including pushing them to your own S3 buckets).


You can find documentation about Blitline.com and it's services by following the links in the *Further reading* section below

Further reading:

* (Quickstart)[http://www.blitline.com/docs/quickstart]
* (Blitline Blog)[http://blitline.tumblr.com]


== Contributing to blitline

* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it
* Fork the project
* Start a feature/bugfix branch
* Commit and push until you are happy with your contribution
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.
* Please try not to mess with the Rakefile, version, or history. If you want to have your own version, or is otherwise necessary, that is fine, but please isolate to its own commit so I can cherry-pick around it.
