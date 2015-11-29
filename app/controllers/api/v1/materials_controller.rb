class Api::V1::MaterialsController < ApplicationController
  def index
    materials = Material.all
    render json: materials
  end

  def show

  end

  def create
    materials = Material.create(material_params)
    render json: materials
  end

  def update

  end

  def destroy

  end

  private

  def material_params
    params.permit(:name, :user_id, :project_id, :unit)
  end
end
