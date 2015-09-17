require 'sinatra'
require 'json'
require 'dotenv'
require 'mail'

Dotenv.load

$stdout.sync = true

options = { :address              => "smtp.gmail.com",
            :port                 => 587,
            :domain               => ENV["DOMAIN"],
            :user_name            => ENV["EMAIL_ADDRESS"],
            :password             => ENV["EMAIL_PASSWORD"],
            :authentication       => 'plain',
            :enable_starttls_auto => true  }

Mail.defaults do
  delivery_method :smtp, options
end

get '/' do
  File.read(File.join('public', 'index.html'))
end

post '/contact-form' do

  name = params["name"]
  email = params["email"]
  message = params["message"]

  # puts "#{name} #{email} #{message}"

  Mail.deliver do
    to      ENV["TO_ADDRESS"]
    from    ENV["EMAIL_ADDRESS"]
    subject "A message from #{name}"
    body    "#{name}\n#{email}\n\n#{message}"
  end

end