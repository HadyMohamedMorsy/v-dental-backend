import { BaseMemberEntity } from "src/shared/entities/base.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GeneralSettings extends BaseMemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  gtm_container_id: string;

  @Column({ nullable: true })
  google_analytics_id: string;

  @Column({ nullable: true })
  facebook_pixel_id: string;

  @Column({ nullable: true })
  snapchat_pixel_id: string;

  @Column({ nullable: true })
  init_tiktok_id: string;

  @Column({ nullable: true, default: false })
  google_analytics_enabled: boolean;

  @Column({ nullable: true, default: false })
  facebook_pixel_enabled: boolean;

  @Column({ nullable: true, default: false })
  snapchat_pixel_enabled: boolean;

  @Column({ nullable: true, default: false })
  init_tiktok_enabled: boolean;

  @Column({ nullable: true })
  facebook_url: string;

  @Column({ nullable: true })
  instagram_url: string;

  @Column({ nullable: true })
  meta_title: string;

  @Column({ nullable: true, type: "text" })
  meta_description: string;

  @Column({ nullable: true, type: "text" })
  meta_keywords: string;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  createdBy: User;
}
