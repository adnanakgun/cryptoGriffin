# Require any additional compass plugins here.


# Set this to the root of your project when deployed:
project_type      = :stand_alone # :stand_alone or :rails
environment       = :development # :production or :development
preferred_syntax  = :scss # :sass or :scss
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"
relative_assets   = true
sourcemap = "true"



# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

#output_style = (environment == :development) ?  :expanded : :compact

output_style = :compressed # :expanded or :nested or :compact or :compressed

#Removing this option until source map support
#sass_options = (environment == :dev) ? { :debug_info => true } : { :debug_info => false }


# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
#line_comments = (environment == :development) ?  true : false

line_comments = false


# sourcemap =  (environment == :development) ?  true : false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass css/sass scss && rm -rf sass && mv scss sass
