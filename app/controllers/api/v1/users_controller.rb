class Api::V1::UsersController < ApplicationController
  def index
    users = User.all.select(:id, :name)
    render json: users
  end

  def show
    user = User.where(id: params[:id]).select(:id, :name)
    render json: user
  end

  private

  def user_params
    params.permit(:name)
  end

end
