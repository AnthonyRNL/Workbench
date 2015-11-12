class Api::V1::PmaterialsController < ApplicationController
  def index
    pmaterials = Pmaterial.where(project_id: params[:project_id])
    # pmaterials = Pmaterial.all
    render json: pmaterials
  end

  def show
    pmaterial = Pmaterial.find(params[:id])
    render json: pmaterial
  end

  def create
    pmaterial = Pmaterial.create(pmaterial_params)
    render json: pmaterial
  end

  def update
    pmaterial = Pmaterial.find(params[:id])
    pmaterial.update(grocery_params)
    render json: pmaterial
  end

  def destroy
    Pmaterial.find(params[:id]).destroy
    render json: 'deleted'
  end

  def pmaterial_params
    params.permit(:name, :project_id, :unit, :amount)
  end
end
