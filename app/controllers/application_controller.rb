class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  def home
    @title="Home"
  end
  
  def teams
    @title="Teams"
  end
  
  def guest
    @title="Guest"
  end
  
  def gallery
    @title="Gallery"
  end
end
