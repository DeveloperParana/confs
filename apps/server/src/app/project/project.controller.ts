import { Controller, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('columns/:columnId')
  getProjectColumn(@Param('columnId') columnId: string) {
    return this.projectService.getProjectColumn(+columnId);
  }

  @Get('columns/:columnId/cards')
  getProjectColumnCards(@Param('columnId') columnId: string) {
    return this.projectService.getProjectColumnCards(+columnId);
  }

  @Get(':projectId')
  getProject(@Param('projectId') projectId: string) {
    return this.projectService.getProject(+projectId);
  }

  @Get(':projectId/columns')
  getProjectColumns(@Param('projectId') projectId: string) {
    return this.projectService.getProjectColumns(+projectId);
  }
}
