import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import {
  CreateBookmarkDto,
  EditBookmarkDto,
} from './dto';
import { PrismaService } from '../../src/prisma/prisma.service';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async getBookmarks(userId: number) {
    const bookmarks =
      await this.prisma.bookmark.findMany({
        where: { userId },
      });

    return bookmarks;
  }

  async getBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {
    const bookmarks =
      await this.prisma.bookmark.findFirst({
        where: { id: bookmarkId, userId },
      });

    return bookmarks;
  }

  async createBookmark(
    userId: number,
    dto: CreateBookmarkDto,
  ) {
    const bookmark =
      await this.prisma.bookmark.create({
        data: {
          userId,
          ...dto,
        },
      });

    return bookmark;
  }

  async editBookmarkById(
    userId: number,
    bookmarkId: number,
    dto: EditBookmarkDto,
  ) {
    const bookmark =
      await this.prisma.bookmark.findUnique({
        where: { id: bookmarkId },
      });

    // check if user owns resource
    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException(
        'Access denied!',
      );
    }

    return this.prisma.bookmark.update({
      where: { id: bookmarkId },
      data: { ...dto },
    });
  }

  async deleteBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {
    const bookmark =
      await this.prisma.bookmark.findUnique({
        where: { id: bookmarkId },
      });

    // check if user owns resource about to be deleted
    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException(
        'Access denied!',
      );
    }

    await this.prisma.bookmark.delete({
      where: { id: bookmarkId },
    });
  }
}
