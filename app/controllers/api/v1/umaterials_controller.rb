class Api::V1::UmaterialsController < ApplicationController
  def index
    umaterials = Umaterial.where(user_id: params[:user_id])
    umaterials.each do |x|
      x.name = x.material.name
      x.unit = x.material.unit
      x.perishable = x.material.perishable
      # binding.pry
    end
    render json: umaterials
  end

  def show
    umaterial = Umaterial.find(params[:id])
    render json: umaterial
  end

  def create
    #add to the params here, especially the material params
    if !params[:material_id]
      material = Material.create(material_params)
      params[:material_id] = material.id
    end
    umaterial = Umaterial.create(umaterial_params)
    umaterial.name = x.material.name
    umaterial.unit = x.material.unit
    umaterial.perishable = x.material.perishable

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

    params.permit(:name, :user_id, :unit, :amount, :material_id)
  end

  def material_params
    params.permit(:name, :unit)
  end
end
