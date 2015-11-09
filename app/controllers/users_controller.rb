class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path, :notice => "Thanks for registering! Please enjoy!"
    else
      render :new
    end
  end

  def show
    if params[:id] == session[:user_id].to_s
      @user = User.find(session[:user_id])
      @umaterials = @user.umaterials
    else
      redirect_to root_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
