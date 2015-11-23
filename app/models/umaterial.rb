class Umaterial < ActiveRecord::Base
  attr_accessor :name, :unit, :perishable
  # def attribute
  #   super.merge(:name => self.name)
  #   super.merge(:unit => self.unit)
  #   super.merge(:perishable => self.perishable)
  #
  # end
  belongs_to :user
  belongs_to :material
end
