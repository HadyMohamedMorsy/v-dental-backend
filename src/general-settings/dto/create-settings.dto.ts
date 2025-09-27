import { IsBoolean, IsEmail, IsOptional, IsString, MaxLength } from "class-validator";
import { User } from "src/users/user.entity";

export class CreateGeneralSettingsDto {
  // Basic Information
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  // Analytics
  @IsString()
  @IsOptional()
  gtm_container_id?: string;

  @IsString()
  @IsOptional()
  google_analytics_id?: string;

  @IsString()
  @IsOptional()
  facebook_pixel_id?: string;

  @IsString()
  @IsOptional()
  snapchat_pixel_id?: string;

  @IsString()
  @IsOptional()
  init_tiktok_id?: string;

  // Analytics Enable/Disable
  @IsBoolean()
  @IsOptional()
  google_analytics_enabled?: boolean;

  @IsBoolean()
  @IsOptional()
  facebook_pixel_enabled?: boolean;

  @IsBoolean()
  @IsOptional()
  snapchat_pixel_enabled?: boolean;

  @IsBoolean()
  @IsOptional()
  init_tiktok_enabled?: boolean;

  // Social Media
  @IsString()
  @IsOptional()
  facebook_url?: string;

  @IsString()
  @IsOptional()
  instagram_url?: string;

  // SEO Settings
  @IsString()
  @MaxLength(60)
  @IsOptional()
  meta_title?: string;

  @IsString()
  @MaxLength(160)
  @IsOptional()
  meta_description?: string;

  @IsString()
  @IsOptional()
  meta_keywords?: string;

  createdBy: User;
}
