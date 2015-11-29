class Api::V1::PmaterialsController < ApplicationController
  def index
    pmaterials = Pmaterial.where(project_id: params[:project_id])
    pmaterials.each do |x|
      x.name = x.material.name
      x.unit = x.material.unit
      x.perishable = x.material.perishable
    end
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
    params.permit(:project_id, :amount, :material_id)
  end
end
