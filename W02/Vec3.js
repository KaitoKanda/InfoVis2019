Vec3 = function( x, y, z )
{
this.x = x;
this.y = y;
this.z = z;
}

Vec3.prototype.add = function( v )
{
this.x += v.x;
this.y += v.y;
this.z += v.z;
return this;
}

Vec3.prototype.sum = function(){
  return this.x + this.y + this.z;
}

Vec3.prototype.min = function(){
  if(this.x <= this.y && this.x <= this.z){
    return this.x;
  }else if(this.y <= this.x && this.y <= this.z){
    return this.y;
  }else if(this.z <= this.x && this.z <= this.y){
    return this.z;
  }
}

Vec3.prototype.mid = function(){
  if(this.min() < x && x < this.max()){
    return x;
  }else if(this.min() < y && y < this.max()){
    return y;
  }else if(this.min() < z && z < this.max()){
    return z;
  }
}

Vec3.prototype.max = function(){
  if(this.x >= this.y && this.x >= this.z){
    return this.x;
  }else if(this.y >= this.x && this.y >= this.z){
    return this.y;
  }else if(this.z >= this.x && this.z >= this.y){
    return this.z;
  }
}
