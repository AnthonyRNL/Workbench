class Api::V1::UmaterialsController < ApplicationController
  def index
    umaterials = Umaterial.where(user_id: params[:user_id])
    render json: umaterials
  end

  def show
    umaterial = Umaterial.find(params[:id])
    render json: umaterial
  end

  def create
    umaterial = Umaterial.create(umaterial_params)
    render json: umaterial
  end

  # def update
  #   umaterial = Umaterial.find(params[:id])
  #   umaterial.update(umaterial_params)
  #   render json: umaterial
  # end
  #
  def destroy
    Umaterial.find(params[:id]).destroy
    render json: 'deleted'
  end

  private

  def umaterial_params
    params.permit(:name, :amount, :unit, :user_id)
  end
end
