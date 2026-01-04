
export enum VideoType {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL'
}

export interface VideoProject {
  id: string;
  title: string;
  year: string;
  type: VideoType;
  thumbnail: string;
  ytUrl: string | string[]; // 支援單一連結或系列連結
  descriptionCn: string;
  descriptionEn: string;
  crew: string[];
  gallery?: string[]; // 劇照廊道
  previewStart?: number; // 新增：主頁預覽開始秒數
  previewEnd?: number;   // 新增：主頁預覽結束秒數
}

export interface AppState {
  currentVideo: VideoProject | null;
}
