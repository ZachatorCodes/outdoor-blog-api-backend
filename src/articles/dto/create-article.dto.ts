import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({description: 'The title of the article', example: 'My First Article'})
  title: string;

  @ApiProperty({required: false, description: 'A brief description of the article', example: 'This is a brief description of my first article'})
  description?: string;

  @ApiProperty({description: 'The main content of the article', example: 'This is the main content of my first article'})
  body: string;

  @ApiProperty({default: false, description: 'Whether the article is published', example: false})
  published: boolean = false;
}
