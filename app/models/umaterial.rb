class Umaterial < ActiveRecord::Base
  attr_accessor :name, :unit, :perishable

  belongs_to :user
  belongs_to :material
end
