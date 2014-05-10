class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  def home
    @title="Home"
  end
  
  def teams
    @title="China"
  end
  
  def guest
    @title="Korea"
  end
  
  def gallery
    @title="Japan"
  end
end
