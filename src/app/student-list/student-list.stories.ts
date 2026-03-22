import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { StudentListComponent } from './student-list.component';

const meta: Meta<StudentListComponent> = {
  title: 'StudentList',
  component: StudentListComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<StudentListComponent>;

export const Default: Story = {};

